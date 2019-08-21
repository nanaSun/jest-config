import React from "react"
import TestComponent from "./TestComponent"
import {mount,shallow} from 'enzyme'
import renderer from 'react-test-renderer';

describe("test",()=>{
  it("render", async ()=>{
      const t1=mount(<TestComponent/>)
      console.log(t1.debug())

      const t2=shallow(<TestComponent/>)
      console.log(t2.debug())

      const tree = renderer.create(<TestComponent />);
      expect(tree.toJSON()).toMatchSnapshot();
  })
})