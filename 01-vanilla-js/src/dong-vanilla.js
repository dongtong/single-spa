let container = null;

export const bootstrap = async () => {
  console.log('应用正在启动...');
}

export const mount = async () => {
  console.log('应用正在挂载...');
  container = document.createElement('div');
  container.innerHTML = "Hello single spa!";
  container.id = 'dong_vanilla_container';
  document.body.appendChild(container);
}

export const unmount = async () => {
  console.log('正在卸载应用...');
  document.body.removeChild(container);
}