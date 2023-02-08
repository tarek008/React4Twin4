export const search = (Tab, id) => {
  return Tab.find(entry => entry.id === id);
};