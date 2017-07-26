import React from 'react';
import {
    shallow, mount
}
from 'enzyme';

import Game from './game';

describe('<Game/>', () => {
    it('Renders withour crashing', () => {
        shallow( < Game / > );
                });

        it('Can starts a new game', () => {
            const wrapper = shallow( < Game / > );
            wrapper.setState({guesses: [1, 2, 3, 4],feedback: 'Awesome', value: -1});
            wrapper.instance().newGame();
            expect(wrapper.state('guesses')).toEqual([]);
            expect(wrapper.state('feedback')).toEqual('Make your guess!');
            expect(wrapper.state('value')).toBeGreaterThanOrEqual(0);
            expect(wrapper.state('value')).toBeLessThanOrEqual(100);
        });

        it('Can make guesses', () => {
            const wrapper = shallow( < Game / > );
            wrapper.setState({value: 100});
            wrapper.instance().evaluateGuess(25);
            expect(wrapper.state('guesses')).toEqual([25]);
            expect(wrapper.state('feedback')).toEqual('Woooaahhh, It is freezing (+/- 50 Up)');

            wrapper.instance().evaluateGuess(60);
            expect(wrapper.state('guesses')).toEqual([25, 60]);
            expect(wrapper.state('feedback')).toEqual('Ummm, It is kinda hot (+/- 25 Up)');

            wrapper.instance().evaluateGuess(80);
            expect(wrapper.state('guesses')).toEqual([25, 60, 80]);
            expect(wrapper.state('feedback')).toEqual('Warm (+/- 10 Up)');

            wrapper.instance().evaluateGuess(93);
            expect(wrapper.state('guesses')).toEqual([25, 60, 80, 93]);
            expect(wrapper.state('feedback')).toEqual('You are Hot! (+/- 5 Up)');

            wrapper.instance().evaluateGuess(96);
            expect(wrapper.state('guesses')).toEqual([25, 60, 80,93,96]);
            expect(wrapper.state('feedback')).toEqual('One more step (+/- 1 Up)');

            wrapper.instance().evaluateGuess(100);
            expect(wrapper.state('guesses')).toEqual([25, 60, 80,93,96,100]);
            expect(wrapper.state('feedback')).toEqual('GOT IT!!');
        });


    });
