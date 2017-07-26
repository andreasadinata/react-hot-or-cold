import React from 'react';
import {
    shallow
}
from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessForm/>', () => {
    it('should render withour crashing', () => {
        shallow( < GuessSection / > );
                });

        it('should render the feedback', () => {
            const feedback = "example feedback";
            const wrapper = shallow( < GuessSection feedback = {
                                    feedback
                                    }
                                    />)
                                    expect(wrapper.contains(feedback)).toEqual(true);
        })
    });
