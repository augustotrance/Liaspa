export interface ServiceItem {
    name: string;
    description: string;
    note?: string;
    price?: string; // Placeholder if pricing is added later
}

export interface ServiceCategory {
    id: string;
    title: string;
    iconName: string; // Mapping to Lucide icons
    description: string;
    items: ServiceItem[];
    image: string;
}

export interface ChatMessage {
    id: string;
    role: 'user' | 'model';
    text: string;
    timestamp: Date;
}