import React from 'react'
import { create } from 'react-test-renderer'

import Title from '../Title'

describe('Title component', () => {
    it('should match previous snapshot', () => {
        const component = create(<Title text='Test' />)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
