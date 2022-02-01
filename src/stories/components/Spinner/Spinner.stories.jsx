import { Spinner } from './Spinner';


export default {

  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    customSize:{
      options: ['small','medium','big'],
      control: { type: 'radio' }
    },
    position: {
       options: ['center','left','right'],
         control: { type: 'select' }
    },
    colorFigure1: {
      control: {
        type: 'color'
      }
    },
     colorFigure2: {
      control: {
        type: 'color'
      }
    }
  }
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Spinner {...args} />;

export const Primary = Template.bind({})
  Primary.args= {
    colorFigure1: 'blue'
};
