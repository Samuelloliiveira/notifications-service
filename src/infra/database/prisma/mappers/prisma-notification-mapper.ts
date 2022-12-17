import { Notification as RawNotification } from "@prisma/client";
import { Notification } from "@application/entities/notification";
import { Content } from "@application/entities/content";

export class PrismaNotificationMapper {
    /**Convertendo a notificação para a camada de persistência */
    static toPrisma(notification: Notification) {
        return {
            id: notification.id,
            category: notification.category,
            content: notification.content.value,
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            createdAt: notification.createdAt,
        }
    };

    /**converter a notificação da camada do prisma(BD) 
     * para a camada de dominio da nossa aplicação(entidades, etc) */
    static toDomain(raw: RawNotification): Notification {
        return new Notification({
            category: raw.category,
            content: new Content(raw.content),
            recipientId: raw.recipientId,
            readAt: raw.readAt,
            canceledAt: raw.canceledAt,
            createdAt: raw.createdAt,
        }, raw.id);
    }
}
