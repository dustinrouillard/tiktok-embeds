export function parseUserAgent(agent: string) {
  if (agent.toLowerCase().includes('discord')) {
    return 'discord';
  } else if (agent.toLowerCase().includes('telegram')) {
    return 'telegram';
  } else {
    return 'other';
  }
}