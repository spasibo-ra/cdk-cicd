

async function handler(event: any, context: any) {
  return {
    statusCode: 400,
    body: JSON.stringify('Hello!'),
  };
};

export { handler }; 