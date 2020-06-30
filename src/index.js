import app from './app';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element is undefined');
}

app(root);
