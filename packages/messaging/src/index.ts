import client, { Connection, Channel, ConsumeMessage } from "amqplib";

import { rmqUser, rmqPass, rmqhost, NOTIFICATION_QUEUE } from "./config";

