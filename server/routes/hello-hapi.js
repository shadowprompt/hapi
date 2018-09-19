module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply('hello hapi server');
    },
    config: {
      tags: ['api', 'tests'],
      description: '测试hello-hapi',
      auth: false,
    },
  },
];