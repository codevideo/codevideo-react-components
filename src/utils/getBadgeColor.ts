// src/utils/getBadgeColor.ts
import { AllActions, isCompositeAction } from '@fullstackcraftllc/codevideo-types';
import { 
  isEditorAction,
  isTerminalAction,
  isFileExplorerAction,
  isMouseAction,
  isAuthorAction,
  isExternalAction,
  isSlideAction
} from '@fullstackcraftllc/codevideo-types';

// This function returns the appropriate color for each action type
export const getBadgeColor = (actionName: AllActions): string => {

  if (isEditorAction({name: actionName, value: ""})) {
    return 'purple';
  } else if (isTerminalAction({name: actionName, value: ""})) {
    return 'gray';
  } else if (isFileExplorerAction({name: actionName, value: ""})) {
    return 'green';
  } else if (isMouseAction({name: actionName, value: ""})) {
    return 'orange';
  } else if (isAuthorAction({name: actionName, value: ""})) {
    return 'blue';
  } else if (isExternalAction({name: actionName, value: ""})) {
    return 'yellow';
  } else if (isSlideAction({name: actionName, value: ""})) {
    return 'cyan';
  } else if (isCompositeAction({name: actionName, value: ""})) {
    return 'pink';
  }
  
  // Default color
  return 'gray';
};