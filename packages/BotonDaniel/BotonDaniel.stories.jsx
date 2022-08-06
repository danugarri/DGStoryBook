import { BotonDaniel } from './BotonDaniel';


export default {

  title: 'Test/Botón Daniel',
  component: BotonDaniel,
  argTypes: {
    customSize:{
      options: ['small','medium','big'],
      control: { type: 'radio' }
    },
    position: {
       options: ['center','left','right'],
        // control: { type: 'select' } default value if options are defined
    },
    buttonColor: {
      control: {
        type: 'color'
      }
    }
  }
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <BotonDaniel {...args} />;

export const Primary = Template.bind({})
  Primary.args= {
    
    primary: true,
    label: 'Botón Dani',
    buttonColor: 'red'
};
export const Small = Template.bind({})
  Small.args= {
    
    primary: true,
    label: 'Botón Dani',
    customSize: 'small'
};
export const Medium = Template.bind({})
  Medium.args= {
    
    primary: true,
    label: 'Botón Dani',
    customSize: 'medium'
};
export const Big = Template.bind({})
  Big.args= {
    
    primary: true,
    label: 'Botón Dani',
    customSize: 'big'
};
