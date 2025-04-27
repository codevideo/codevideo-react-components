# codevideo-react-components

A series of React components used throughout the CodeVideo ecosystem.

Currently, we only have action badges which are used to represent the name of an action, color coded by domain (file-explorer, editor, terminal, etc.). These badges are used in the CodeVideo Studio as well as in our blog posts.

## Usage

Install the package using npm:

```bash
npm install @fullstackcraftllc/codevideo-react-components
```

Import the `ActionBadge` component in your React application and use it:

```tsx
import { ActionBadge } from '@fullstackcraftllc/codevideo-react-components';

const App = () => {
  return (
    <>
      <ActionBadge actionName="mouse-move-file-explorer" />
      <ActionBadge actionName="editor-type" />
      <ActionBadge actionName="terminal-type" />
    </>
  );
};
```

## Props

| Prop        | Type     | Description                                                                 |
|-------------|----------|-----------------------------------------------------------------------------|
| actionName  | string   | Required. The name of the action. This should be in the format of `domain-action`. |
| size        | string   | Optional. Size of the badge. Values: `'sm'`, `'md'` (default), or `'lg'`.   |
| variant     | string   | Optional. Badge display style. Values: `'solid'`, `'outline'`, or `'soft'` (default). |
| className   | string   | Optional. Additional CSS class names to apply to the badge.                 |
| onClick     | function | Optional. Click event handler for the badge.                                |

## Example

```tsx
import { ActionBadge } from '@fullstackcraftllc/codevideo-react-components';

const App = () => {
  return (
    <div>
      {/* Basic usage */}
      <ActionBadge actionName="editor-type" />
      
      {/* With all props */}
      <ActionBadge 
        actionName="terminal-type" 
        size="lg" 
        variant="solid" 
        className="my-custom-class" 
        onClick={() => console.log('Badge clicked!')} 
      />
      
      {/* Different domains have different colors */}
      <ActionBadge actionName="mouse-move-file-explorer" />
      <ActionBadge actionName="editor-type" />
      <ActionBadge actionName="terminal-type" />
      <ActionBadge actionName="author-comment" />
      <ActionBadge actionName="slide-next" />
      <ActionBadge actionName="external-open-browser" />
    </div>
  );
};
```
