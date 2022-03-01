import React from 'react'
import { create } from 'react-test-renderer'

import Text from '../Text'

describe('Text component', () => {
    it('should match previous snapshot', () => {
        const component = create(<Text text='Test' />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
