import React from 'react'
import {mount} from 'enzyme'
import {act} from 'react-dom/test-utils'

import {waitNextTick} from 'utils/test-utils'

import CoacheeForm from '../Coachee'

describe('CoacheeForm', () => {
  let wrapper = beforeEach(() => {
    wrapper = mount(<CoacheeForm />)
  })

  afterEach(() => wrapper.unmount())

  it('it updates firstName', async () => {
    const field = wrapper.find('input[name="firstName"]').first()
    await act(async () => field.simulate('change', { persist: () => {}, target: {name: 'firstName', value: 'Test'}}))
    wrapper.update()
    expect(wrapper.find('input[name="firstName"]').first().props().value).toEqual('Test')
  })

  it('it updates lastName', async () => {
    const field = wrapper.find('input[name="lastName"]').first()
    await act(async () => field.simulate('change', { persist: () => {}, target: {name: 'lastName', value: 'Test'}}))
    wrapper.update()
    expect(wrapper.find('input[name="lastName"]').first().props().value).toEqual('Test')
  })

  it('it updates email', async () => {
    const field = wrapper.find('input[name="email"]').first()
    await act(async () => field.simulate('change', { persist: () => {}, target: {name: 'email', value: 'test@test.com'}}))

    wrapper.update()
    expect(wrapper.find('input[name="email"]').first().props().value).toEqual('test@test.com')
  })

  it('it updates password and confirm password', async () => {
    const field = wrapper.find('input[name="password"]').first()
    await act(async () => field.simulate('change', { persist: () => {}, target: {name: 'password', value: 'pw123'}}))

    wrapper.update()
    expect(wrapper.find('input[name="password"]').first().props().value).toEqual('pw123')

    const field2 = wrapper.find('input[name="confirmPassword"]').first()
    await act(async () => field2.simulate('change', { persist: () => {}, target: {name: 'confirmPassword', value: 'pw123'}}))

    wrapper.update()
    expect(wrapper.find('input[name="confirmPassword"]').first().props().value)
      .toEqual(wrapper.find('input[name="password"]').first().props().value)
  })

  it('it updates terms and conditions checkbox', async () => {
    const field = wrapper.find('input[name="acceptTerms"]').first()
    await act(async () => field.simulate('change', { persist: () => {}, target: {type: 'checkbox', name: 'acceptTerms', checked: true}}))

    wrapper.update()
    expect(wrapper.find('input[name="acceptTerms"]').first().props().checked).toEqual(true)
  })
})
