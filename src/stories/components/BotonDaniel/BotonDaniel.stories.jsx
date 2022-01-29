// FirstComponent.stories.js|jsx

import { BotonDaniel } from './BotonDaniel';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docsreact/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
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
    }
  }
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <BotonDaniel {...args} />;

export const Primary = Template.bind({})
  Primary.args= {
    
    primary: true,
    label: 'Botón Dani',
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
