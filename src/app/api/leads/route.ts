import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

interface Lead {
  email: string
  source: string
  createdAt: string
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const LEADS_PATH = path.join(process.cwd(), 'src/data/leads.json')

async function readLeads(): Promise<Lead[]> {
  try {
    const data = await fs.readFile(LEADS_PATH, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : ''

    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'A valid email address is required.' },
        { status: 400 }
      )
    }

    const leads = await readLeads()

    if (leads.some((l) => l.email === email)) {
      return NextResponse.json(
        { error: 'This email is already registered.' },
        { status: 409 }
      )
    }

    leads.push({
      email,
      source: 'toolkit',
      createdAt: new Date().toISOString(),
    })

    await fs.writeFile(LEADS_PATH, JSON.stringify(leads, null, 2))

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
