// FirstComponent.stories.js|jsx

import { FirstComponent } from './FirstComponent';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docsreact/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'FirstComponent',
  component: FirstComponent,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <FirstComponent {...args} />;

export const Pepe = Template.bind({})
  Pepe.args= {
    //👇 The args you need here will depend on your component
    primary: true,
    label: 'Botón Dani',
};
