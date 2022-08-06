import { SideBar } from "./SideBar";

export default {

  title: 'Components/SideBar',
  component: SideBar,
  argTypes: {
    showSidebar:{
    //    control: { type: 'range', min: 400, max: 1200, step: 50 }
    control: {
        type:'boolean'
    }
    },
    position: {
      options: ['top', 'middle', 'bottom'],
      control: {
        type: 'select'
      }
    }
}
}

const Template = (args) => <SideBar {...args} />;

export const Primary = Template.bind({})
  Primary.args= {
   
    position: 'top',
    showSidebar: false
};