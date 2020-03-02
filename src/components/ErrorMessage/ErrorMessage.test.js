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
    expect(wrapper).to.have.lengthOf(1)
  })

  it('it renders with prop status 401', () => {
    const wrapper = shallow(<ErrorMessage status={401} />)
    expect(wrapper).to.have.lengthOf(1)
  })

  it('it renders with prop status 404', () => {
    const wrapper = shallow(<ErrorMessage status={404} />)
    expect(wrapper).to.have.lengthOf(1)
  })

  it('it renders with prop status is greater or equal to 500', () => {
    let wrapper = shallow(<ErrorMessage status={500} />)
    expect(wrapper).to.have.lengthOf(1)
    wrapper = shallow(<ErrorMessage status={99} />)
    expect(wrapper).to.have.lengthOf(1)
  })

  it('it renders <Unauthorized /> when status is 401', () => {
    const wrapper = shallow(<ErrorMessage status={401} />)
    expect(wrapper.children()).to.contain(Unauthorized)
  })

  it('it renders <NotFound /> when status is 404', () => {
    const wrapper = shallow(<ErrorMessage status={404} />)
    expect(wrapper.children()).to.contain(NotFound)
  })

  it('it renders <ServiceUnavailable /> when status is greater or equal to 500', () => {
    let wrapper = shallow(<ErrorMessage status={500} />)
    expect(wrapper.children()).to.contain(ServiceUnavailable)
    wrapper = shallow(<ErrorMessage status={599} />)
    expect(wrapper.children()).to.contain(ServiceUnavailable)
  })

  it('it renders <Generic /> when no prop or no status match', () => {
    let wrapper = shallow(<ErrorMessage />)
    expect(wrapper.children()).to.contain(Generic)
    wrapper = shallow(<ErrorMessage status={600} />)
    expect(wrapper.children()).to.contain(Generic)
  })
})
