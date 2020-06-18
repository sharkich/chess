const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = './app/app.css';

const head = document.getElementsByTagName('HEAD')[0];
head.appendChild(link);
