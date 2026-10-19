export default class BrokerManager {
  private connection;
  private channel;

  async connect(): Promise<void> {
    // connect to RabbitMQ
  }

  async disconnect(): Promise<void> {
    // close channel and connection
  }

  getChannel() {
    return this.channel;
  }
}