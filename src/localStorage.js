import localStorage from 'react-native-simple-store';

export const loadState = () => {
  try {
    const serializedState = localStorage.get('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.save('state', serializedState);
  } catch (err) {
    // ignore write errors
  }
};
