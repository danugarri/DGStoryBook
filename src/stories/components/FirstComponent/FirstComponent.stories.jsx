// FirstComponent.stories.js|jsx

import { FirstComponent } from './FirstComponent';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docsreact/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Test/First Component',
  component: FirstComponent,
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
const Template = (args) => <FirstComponent {...args} />;

export const Primary = Template.bind({})
  Primary.args= {
    //👇 The args you need here will depend on your component
    primary: true,
    label: 'Botón Dani',
};
export const Small = Template.bind({})
  Small.args= {
    //👇 The args you need here will depend on your component
    primary: true,
    label: 'Botón Dani',
    customSize: 'small'
};
export const Medium = Template.bind({})
  Medium.args= {
    //👇 The args you need here will depend on your component
    primary: true,
    label: 'Botón Dani',
    customSize: 'medium'
};
