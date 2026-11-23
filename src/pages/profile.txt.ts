import { getCollection } from 'astro:content';
import { hackathons, introduction, skills } from '../designs/profile';

export async function GET() {
  const projects = (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);
  const profile = [
    '# Adil Bains',
    '',
    introduction,
    '',
    'B.Tech. in Computer Science & Engineering, Maharaja Surajmal Institute of Technology',
    '',
    '## Projects',
    ...projects.map(({ data }) => `- ${data.title}: ${data.description} ${data.url}`),
    '',
    '## Hackathons',
    ...hackathons.map(({ project, event, result, description }) => `- ${project} (${event}, ${result}): ${description}`),
    '',
    '## Technical skills',
    ...skills.map(({ label, value }) => `- ${label}: ${value}`),
    '',
    'Email: adilbains.work@gmail.com',
    'GitHub: https://github.com/ADIBAINS',
    '',
  ].join('\n');
  return new Response(profile, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
