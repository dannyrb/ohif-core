import cloneDeep from 'lodash.clonedeep';
import log from '../../log';

const buttons = [
  // {
  //   command: 'Pan',
  //   type: 'tool',
  //   text: 'Pan',
  //   icon: 'arrows',
  //   active: false
  // }
];

const tools = (state = { buttons: buttons }, action) => {
  switch (action.type) {
    case 'SET_TOOL_ACTIVE': {
      //const buttons = cloneDeep(state.buttons);
      let item;

      // TODO: Just pass this info in with the action...
      // Try to find item in parent or child button
      for (let i = 0; i < state.buttons.length; i++) {
        const parentButton = state.buttons[i];

        if (parentButton.buttons) {
          for (let j = 0; j < parentButton.buttons.length; j++) {
            const childButton = parentButton.buttons[j];

            if (childButton.command === action.tool) {
              item = childButton;
              break;
            }
          }
        }

        if (parentButton.command === action.tool) {
          item = parentButton;
        }
        if (item) {
          break;
        }
      }

      // TODO: We don't need to do any of this...
      // Just record the `activeTool`, and compute the display prop in the component
      let buttons = [];
      if (item && item.type === 'tool') {
        buttons = state.buttons.map(button => {
          if (button.command === action.tool) {
            button.active = true;
          } else if (button.type === 'tool') {
            button.active = false;
          }

          // Child buttons
          if (button.buttons) {
            button.buttons = button.buttons.map(childButton => {
              if (childButton.command === action.tool) {
                childButton.active = true;
              } else if (childButton.type === 'tool') {
                childButton.active = false;
              }

              return childButton;
            });
          }

          return button;
        });
      } else {
        buttons = state.buttons;
        log.warn(`Tool ${action.tool} not found`);
      }

      return {
        buttons,
      };
    }
    case 'SET_AVAILABLE_BUTTONS':
      return {
        buttons: action.buttons,
      };
    default:
      return state;
  }
};

export default tools;
