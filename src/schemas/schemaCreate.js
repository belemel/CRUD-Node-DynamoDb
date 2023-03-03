const schema = {
    properties: {
      body: {
        type: 'object',
        properties: {
          id: {
            type: 'string'
          },
          date: {
            type: 'string'
          },
          createdAt: {
            type: 'string'
          },
          updatedAt: {
            type: 'string'
          },
        },
        // required: ['userId', 'companyId'],
      },
    },
    required: [
      'body',
    ],
  };
  
  export default schema;