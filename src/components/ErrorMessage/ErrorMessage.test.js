import React from 'react'
import {shallow} from 'enzyme'
import ErrorMessage from './ErrorMessage'
import NotFound from './Codes/NotFound'
import Unauthorized from './Codes/Unauthorized'
import ServiceUnavailable from './Codes/ServiceUnavailable'
import Generic from './Codes/Generic'

describe('<ErrorMessage />', () => {
  it('it renders without props', () => {
    const wrapper = shallow(<ErrorMessage />)
    expect(wrapper).toHaveLength(1)
  })

  it('it renders with prop status 401', () => {
    const wrapper = shallow(<ErrorMessage status={401} />)
    expect(wrapper).toHaveLength(1)
  })

  it('it renders with prop status 404', () => {
    const wrapper = shallow(<ErrorMessage status={404} />)
    expect(wrapper).toHaveLength(1)
  })

  it('it renders with prop status is greater or equal to 500', () => {
    let wrapper = shallow(<ErrorMessage status={500} />)
    expect(wrapper).toHaveLength(1)
    wrapper = shallow(<ErrorMessage status={99} />)
    expect(wrapper).toHaveLength(1)
  })

  it('it renders <Unauthorized /> when status is 401', () => {
    const wrapper = shallow(<ErrorMessage status={401} />)
    expect(wrapper.find(Unauthorized)).toHaveLength(1)
  })

  it('it renders <NotFound /> when status is 404', () => {
    const wrapper = shallow(<ErrorMessage status={404} />)
    expect(wrapper.find(NotFound)).toHaveLength(1)
  })

  it('it renders <ServiceUnavailable /> when status is greater or equal to 500', () => {
    let wrapper = shallow(<ErrorMessage status={500} />)
    expect(wrapper.find(ServiceUnavailable)).toHaveLength(1)
    wrapper = shallow(<ErrorMessage status={599} />)
    expect(wrapper.find(ServiceUnavailable)).toHaveLength(1)
  })

  it('it renders <Generic /> when no prop or no status match', () => {
    const wrapper = shallow(<ErrorMessage />)
    expect(wrapper.find(Generic)).toHaveLength(1)
  })
})
