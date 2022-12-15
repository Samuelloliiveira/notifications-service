import { Content } from "@application/entities/content";
import { Notification, NotificationProps } from "@application/entities/notification";

//Partial do TypeScript faz com que todos os atributos seja opcional
type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
    return new Notification({
        category: 'social',
        content: new Content('Nova solicitação de amizade!'),
        recipientId: 'recipient-1',
        ...override,
    })
}