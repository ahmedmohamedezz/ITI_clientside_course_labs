export default class DataFetcher {
  // since we don't need to pass any data to the constructor. and need no services from objects. 
  // we can make getUser() static
  static async getUser(id) {
    let data = "";
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      data = await response.json();
    } catch (error) {
      console.error(`Error: ${error}`);
    }

    return data;
  }
}
