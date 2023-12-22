/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * An object describing an incoming webhook.
 */
export interface IncomingWebhookSchema {
    /** The date and time of when the incoming webhook was created. */
    createdAt: string;
    /** The ID of the user that created this incoming webhook. */
    createdByUserId: number;
    /** Whether the incoming webhook is currently enabled. If not specified, defaults to true. */
    enabled: boolean;
    /** The incoming webhook's ID. Incoming webhook IDs are incrementing integers. In other words, a more recently created incoming webhook will always have a higher ID than an older one. */
    id: number;
    /** The incoming webhook name. Must be URL-safe. */
    name: string;
}
