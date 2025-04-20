import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const filePath = path.join(process.cwd(), 'data.json');
    const existing = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf8')) : [];

    existing.push(data);
    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

    res.status(200).json({ message: 'Gespeichert' });
  } else {
    res.status(405).json({ message: 'Nur POST erlaubt' });
  }
}
