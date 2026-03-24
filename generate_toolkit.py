"""
Growth Mindset Toolkit PDF Generator
Creates a professional 8-page lead magnet PDF
"""

from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.pdfgen import canvas
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import Paragraph
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT
import os

# ── Brand colours ──────────────────────────────────────────────────────────
CORAL      = colors.HexColor("#E8635A")   # primary accent
CORAL_LITE = colors.HexColor("#F2958E")   # lighter coral
CREAM      = colors.HexColor("#FEF6F0")   # warm background
NAVY       = colors.HexColor("#1A2B4A")   # dark text / headings
TEAL       = colors.HexColor("#2E86AB")   # secondary accent
SLATE      = colors.HexColor("#4A5568")   # body text
WHITE      = colors.white
LIGHT_PINK = colors.HexColor("#FADADD")   # very soft pink

W, H = letter   # 612 x 792 pt

LOGO_PATH = os.path.join(os.path.dirname(__file__), "logo.jpeg")

# ── Helpers ────────────────────────────────────────────────────────────────

def set_font(c, face="Helvetica", size=12):
    c.setFont(face, size)

def draw_full_bg(c, color):
    c.setFillColor(color)
    c.rect(0, 0, W, H, fill=1, stroke=0)

def draw_rect(c, x, y, w, h, fill_color, stroke_color=None, radius=0):
    c.setFillColor(fill_color)
    if stroke_color:
        c.setStrokeColor(stroke_color)
        c.roundRect(x, y, w, h, radius, fill=1, stroke=1)
    else:
        c.setStrokeColor(fill_color)
        c.roundRect(x, y, w, h, radius, fill=1, stroke=0)

def centered_text(c, text, y, face="Helvetica-Bold", size=14, color=WHITE):
    c.setFillColor(color)
    c.setFont(face, size)
    c.drawCentredString(W / 2, y, text)

def left_text(c, text, x, y, face="Helvetica", size=11, color=SLATE):
    c.setFillColor(color)
    c.setFont(face, size)
    c.drawString(x, y, text)

def para(c, text, x, y, width, face="Helvetica", size=10.5, color=SLATE,
         leading=15, align=TA_LEFT):
    """Render a wrapped paragraph using Platypus Paragraph inside canvas."""
    style = ParagraphStyle(
        "custom",
        fontName=face,
        fontSize=size,
        leading=leading,
        textColor=color,
        alignment=align,
    )
    p = Paragraph(text, style)
    p.wrapOn(c, width, H)
    p.drawOn(c, x, y)

def page_footer(c, page_num):
    c.setFillColor(CORAL)
    c.rect(0, 0, W, 28, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont("Helvetica", 8)
    c.drawString(36, 10, "growthmindsethub.com  |  @GrowthMindsetHub")
    c.drawRightString(W - 36, 10, f"Page {page_num}")

def section_header(c, title, subtitle=None, y_title=680):
    """Top banner for inner pages."""
    # Coral band
    draw_rect(c, 0, H - 90, W, 90, CORAL)
    # Decorative circle
    c.setFillColor(CORAL_LITE)
    c.circle(W - 60, H - 30, 55, fill=1, stroke=0)
    c.setFillColor(CREAM)
    c.circle(W - 80, H - 60, 30, fill=1, stroke=0)

    centered_text(c, title, H - 50, face="Helvetica-Bold", size=20, color=WHITE)
    if subtitle:
        centered_text(c, subtitle, H - 72, face="Helvetica-Oblique", size=10, color=LIGHT_PINK)

def bullet(c, text, x, y, width=440, color=SLATE, bullet_color=CORAL):
    """Draw a bullet point with wrapped text."""
    c.setFillColor(bullet_color)
    c.circle(x + 6, y + 4, 3.5, fill=1, stroke=0)
    para(c, text, x + 16, y - 6, width - 16, size=10.5, color=color, leading=14)

def number_badge(c, num, x, y, radius=14):
    c.setFillColor(CORAL)
    c.circle(x, y, radius, fill=1, stroke=0)
    c.setFillColor(WHITE)
    c.setFont("Helvetica-Bold", 13)
    c.drawCentredString(x, y - 5, str(num))

# ── PAGE 1 — COVER ─────────────────────────────────────────────────────────

def page_cover(c):
    draw_full_bg(c, CREAM)

    # Big coral header band
    draw_rect(c, 0, H - 260, W, 260, CORAL)

    # Decorative circles on header
    c.setFillColor(CORAL_LITE)
    c.circle(-30, H - 10, 80, fill=1, stroke=0)
    c.circle(W + 20, H - 230, 100, fill=1, stroke=0)
    c.setFillColor(colors.HexColor("#F7B5B0"))
    c.circle(W - 40, H - 20, 45, fill=1, stroke=0)

    # Logo
    if os.path.exists(LOGO_PATH):
        c.drawImage(LOGO_PATH, W / 2 - 38, H - 110, width=76, height=76,
                    mask="auto", preserveAspectRatio=True)

    # Brand name
    centered_text(c, "GROWTH MINDSET HUB", H - 130,
                  face="Helvetica-Bold", size=11, color=LIGHT_PINK)

    # Community badge
    draw_rect(c, W / 2 - 80, H - 162, 160, 22, colors.HexColor("#C0392B"), radius=11)
    centered_text(c, "204K+ Community Members", H - 152,
                  face="Helvetica-Bold", size=9, color=WHITE)

    # Main title
    centered_text(c, "The Growth Mindset", H - 210,
                  face="Helvetica-Bold", size=28, color=WHITE)
    centered_text(c, "TOOLKIT", H - 242,
                  face="Helvetica-Bold", size=36, color=WHITE)

    # Subtitle block
    draw_rect(c, 60, H - 310, W - 120, 42, NAVY, radius=8)
    centered_text(c, "Daily Practices to Rewire Your Thinking", H - 283,
                  face="Helvetica-Bold", size=14, color=WHITE)
    centered_text(c, "Evidence-based strategies from growth psychology research", H - 300,
                  face="Helvetica-Oblique", size=9.5, color=LIGHT_PINK)

    # What's inside section
    draw_rect(c, 36, H - 510, W - 72, 185, WHITE, stroke_color=colors.HexColor("#EDCDC9"), radius=10)

    left_text(c, "WHAT'S INSIDE", 56, H - 348, face="Helvetica-Bold", size=10, color=CORAL)

    items = [
        ("The Science", "Carol Dweck's research on neuroplasticity & mindset"),
        ("Daily Reflections", "5 journaling prompts to shift your inner narrative"),
        ("Reframing Techniques", "CBT-based methods to transform limiting beliefs"),
        ("4-Week Challenge", "A structured plan to build lasting habits"),
        ("Reading List", "Curated books from leading researchers"),
    ]
    icons = ["01", "02", "03", "04", "05"]
    yy = H - 370
    for i, (title_i, desc_i) in enumerate(items):
        draw_rect(c, 56, yy - 2, 22, 22, CORAL, radius=4)
        c.setFillColor(WHITE)
        c.setFont("Helvetica-Bold", 8)
        c.drawCentredString(67, yy + 7, icons[i])
        left_text(c, title_i, 86, yy + 8, face="Helvetica-Bold", size=10, color=NAVY)
        left_text(c, desc_i, 86, yy - 4, face="Helvetica", size=8.5, color=SLATE)
        yy -= 30

    # Inspirational quote
    draw_rect(c, 36, H - 600, W - 72, 70, NAVY, radius=10)
    para(c, '"The view you adopt for yourself profoundly affects the way you lead your life."',
         56, H - 576, W - 112, face="Helvetica-Oblique", size=11,
         color=WHITE, leading=16, align=TA_CENTER)
    centered_text(c, "— Carol S. Dweck, Ph.D., Stanford University", H - 543,
                  face="Helvetica", size=8.5, color=LIGHT_PINK)

    # Free gift callout
    draw_rect(c, 36, H - 650, W - 72, 34, CORAL_LITE, radius=8)
    centered_text(c, "FREE RESOURCE  |  Share freely with attribution",
                  H - 628, face="Helvetica-Bold", size=10, color=NAVY)

    # Footer
    c.setFillColor(NAVY)
    c.rect(0, 0, W, 55, fill=1, stroke=0)
    centered_text(c, "growthmindsethub.com", 30,
                  face="Helvetica-Bold", size=11, color=CORAL)
    centered_text(c, "Follow us on LinkedIn & Instagram @GrowthMindsetHub",
                  14, face="Helvetica", size=8.5, color=colors.HexColor("#A0AEC0"))

    c.showPage()

# ── PAGE 2 — THE SCIENCE ────────────────────────────────────────────────────

def page_science(c):
    draw_full_bg(c, CREAM)
    section_header(c, "The Science of Growth Mindset",
                   "Research-backed insights from Carol S. Dweck, Ph.D.")
    page_footer(c, 2)

    # Intro paragraph
    para(c,
         "In her landmark research at Stanford University, psychologist <b>Carol S. Dweck</b> "
         "identified two fundamental belief systems about human ability — and discovered that "
         "which one you hold shapes virtually every aspect of your life.",
         36, H - 130, W - 72, size=10.5, color=NAVY, leading=16)

    # Two-column cards
    card_w = (W - 90) / 2
    # Fixed mindset card
    draw_rect(c, 36, H - 280, card_w, 130, colors.HexColor("#F8D7DA"), radius=10)
    left_text(c, "FIXED MINDSET", 52, H - 165, face="Helvetica-Bold", size=11, color=colors.HexColor("#C0392B"))
    fixed_pts = [
        "Intelligence & talent are static traits",
        "Avoids challenges to protect ego",
        "Gives up quickly when facing obstacles",
        "Views effort as pointless or shameful",
        "Feels threatened by others' success",
    ]
    fy = H - 183
    for pt in fixed_pts:
        c.setFillColor(colors.HexColor("#C0392B"))
        c.circle(52 + 4, fy + 4, 2.5, fill=1, stroke=0)
        left_text(c, pt, 64, fy, size=9, color=SLATE)
        fy -= 14

    # Growth mindset card
    draw_rect(c, 42 + card_w + 12, H - 280, card_w, 130, colors.HexColor("#D4EDDA"), radius=10)
    lx = 42 + card_w + 28
    left_text(c, "GROWTH MINDSET", lx, H - 165, face="Helvetica-Bold", size=11, color=colors.HexColor("#1A6B3C"))
    growth_pts = [
        "Abilities can grow through dedication",
        "Embraces challenges as opportunities",
        "Persists through setbacks & criticism",
        "Views effort as the path to mastery",
        "Finds lessons in others' success",
    ]
    gy = H - 183
    for pt in growth_pts:
        c.setFillColor(colors.HexColor("#1A6B3C"))
        c.circle(lx + 4, gy + 4, 2.5, fill=1, stroke=0)
        left_text(c, pt, lx + 14, gy, size=9, color=SLATE)
        gy -= 14

    # Key findings
    draw_rect(c, 36, H - 340, W - 72, 44, NAVY, radius=8)
    left_text(c, "KEY RESEARCH FINDINGS", 52, H - 307, face="Helvetica-Bold", size=10, color=CORAL)
    para(c,
         "Dweck's decades of studies show that mindset is not fixed — it is learnable. "
         "Teaching students that intelligence can grow produced measurable improvements in "
         "academic achievement (Blackwell, Trzesniewski & Dweck, 2007, <i>Child Development</i>).",
         52, H - 328, W - 108, size=9.5, color=LIGHT_PINK, leading=13)

    findings = [
        ("<b>Neuroplasticity:</b> The brain forms new neural connections in response to challenge and learning "
         "(Draganski et al., 2004, <i>Nature</i>). Difficulty is not a sign of inadequacy — it is the signal "
         "that growth is happening."),
        ("<b>Praise type matters:</b> Children praised for effort outperformed those praised for intelligence "
         "after setbacks in a series of experiments (Mueller & Dweck, 1998, <i>Journal of Personality & "
         "Social Psychology</i>)."),
        ("<b>Mindset interventions work:</b> A brief online growth-mindset intervention increased GPA "
         "and course-taking in lower-achieving students (Yeager et al., 2019, <i>Nature</i>)."),
        ("<b>Mindset is domain-specific:</b> You may hold a growth mindset in one area and a fixed mindset "
         "in another. Awareness is the first step to change (Dweck, 2006, <i>Mindset: The New Psychology "
         "of Success</i>)."),
    ]
    fy2 = H - 380
    for finding in findings:
        bullet(c, finding, 36, fy2, width=W - 72)
        fy2 -= 52

    # Bottom callout
    draw_rect(c, 36, 50, W - 72, 50, CORAL, radius=8)
    centered_text(c, "Mindset is not a trait you're born with —", 86,
                  face="Helvetica-Bold", size=11, color=WHITE)
    centered_text(c, "it's a skill you build one thought at a time.", 70,
                  face="Helvetica-Oblique", size=11, color=LIGHT_PINK)

    c.showPage()

# ── PAGE 3 — DAILY REFLECTION EXERCISES ────────────────────────────────────

def page_reflections(c):
    draw_full_bg(c, CREAM)
    section_header(c, "Daily Reflection Exercises",
                   "5 journaling prompts grounded in growth mindset principles")
    page_footer(c, 3)

    para(c,
         "Journaling activates reflective processing — a key mechanism for shifting automatic "
         "thought patterns. Use these prompts each morning or evening. Write for at least "
         "5–10 minutes per prompt. Consistency matters more than length.",
         36, H - 130, W - 72, size=10.5, color=NAVY, leading=16)

    prompts = [
        (
            "The Learning Lens",
            "What challenged me today — and what did that challenge teach me about my current abilities?",
            "Reframes struggle as information rather than failure. Based on Dweck's finding that "
            "reappraising difficulty as learning activates a growth-oriented response.",
        ),
        (
            "Effort Audit",
            "Where did I apply genuine effort today? What would more effort look like tomorrow?",
            "Shifts focus from outcomes to process. Research shows effort-based self-evaluation "
            "increases resilience after setbacks (Haimovitz & Dweck, 2017).",
        ),
        (
            "The 'Not Yet' Reframe",
            "What is one thing I can't do yet — and what is one small step toward it?",
            "The phrase 'not yet' is a research-backed linguistic intervention that replaces "
            "fixed-state thinking with a growth trajectory (Dweck, TED Talk, 2014).",
        ),
        (
            "Gratitude for Growth",
            "Who helped me grow this week, and what specifically did they model or teach me?",
            "Combines gratitude practice with social learning. Observing others' mastery "
            "raises self-efficacy beliefs (Bandura, 1977, Social Learning Theory).",
        ),
        (
            "Fear Inventory",
            "What am I avoiding because I fear looking incompetent — and what is the cost of avoiding it?",
            "Surfaces the fixed-mindset fear of judgment. Naming avoidance patterns is the "
            "first step in Acceptance & Commitment Therapy (ACT) to psychological flexibility.",
        ),
    ]

    yy = H - 160
    for i, (title_p, prompt, rationale) in enumerate(prompts):
        # Card
        draw_rect(c, 36, yy - 80, W - 72, 84, WHITE,
                  stroke_color=colors.HexColor("#F2C5C2"), radius=8)
        # Number badge
        number_badge(c, i + 1, 62, yy - 35)
        # Title
        left_text(c, title_p, 84, yy - 22,
                  face="Helvetica-Bold", size=11, color=NAVY)
        # Prompt
        para(c, f'<i>"{prompt}"</i>',
             84, yy - 40, W - 132,
             face="Helvetica-Oblique", size=10, color=CORAL, leading=13)
        # Rationale
        para(c, rationale,
             84, yy - 62, W - 132,
             size=8.5, color=SLATE, leading=12)
        yy -= 100

    c.showPage()

# ── PAGE 4 — REFRAMING TECHNIQUES ──────────────────────────────────────────

def page_reframing(c):
    draw_full_bg(c, CREAM)
    section_header(c, "Reframing Techniques",
                   "CBT-based methods to transform limiting beliefs")
    page_footer(c, 4)

    para(c,
         "Cognitive reframing is a core technique in Cognitive Behavioral Therapy (CBT) and "
         "Acceptance & Commitment Therapy (ACT). These evidence-based approaches train the brain "
         "to interrupt automatic negative patterns and replace them with more adaptive responses.",
         36, H - 130, W - 72, size=10.5, color=NAVY, leading=16)

    # ── Technique 1: I can't → I can't yet ──
    draw_rect(c, 36, H - 250, W - 72, 100, WHITE,
              stroke_color=colors.HexColor("#F2C5C2"), radius=8)
    left_text(c, "TECHNIQUE 1  |  The 'Not Yet' Shift", 52, H - 165,
              face="Helvetica-Bold", size=11, color=CORAL)
    para(c,
         "Replace absolute statements with growth-oriented language. This simple linguistic "
         "shift signals to your brain that mastery is a journey, not a fixed state.",
         52, H - 182, W - 108, size=10, color=SLATE, leading=13)

    # Arrow comparison
    draw_rect(c, 52, H - 240, 140, 44, colors.HexColor("#F8D7DA"), radius=6)
    centered_text(c, '"I can\'t do this."', H - 212,
                  face="Helvetica-Bold", size=10, color=colors.HexColor("#C0392B"))
    centered_text(c, "Fixed", H - 228, face="Helvetica", size=8, color=SLATE)

    c.setFillColor(CORAL)
    c.setFont("Helvetica-Bold", 14)
    c.drawCentredString(W / 2, H - 220, "→")

    draw_rect(c, W - 192, H - 240, 156, 44, colors.HexColor("#D4EDDA"), radius=6)
    centered_text(c, '"I can\'t do this yet."', H - 212,
                  face="Helvetica-Bold", size=10, color=colors.HexColor("#1A6B3C"))
    centered_text(c, "Growth", H - 228, face="Helvetica", size=8, color=SLATE)

    # ── Technique 2: Failure Reframing ──
    draw_rect(c, 36, H - 385, W - 72, 118, WHITE,
              stroke_color=colors.HexColor("#F2C5C2"), radius=8)
    left_text(c, "TECHNIQUE 2  |  The Failure Data Frame", 52, H - 268,
              face="Helvetica-Bold", size=11, color=CORAL)
    para(c,
         "When you encounter failure, run it through these four questions — a technique adapted "
         "from CBT's 'Socratic questioning' method:",
         52, H - 285, W - 108, size=10, color=SLATE, leading=13)

    questions = [
        "What specifically happened? (Facts only — no interpretations)",
        "What did this reveal about where I am in my learning process?",
        "What would I do differently with what I now know?",
        "What is one small action I can take within the next 24 hours?",
    ]
    qy = H - 308
    for q in questions:
        bullet(c, q, 52, qy, width=W - 90, color=SLATE)
        qy -= 22

    # ── Technique 3: Effort-based self-talk ──
    draw_rect(c, 36, H - 530, W - 72, 128, WHITE,
              stroke_color=colors.HexColor("#F2C5C2"), radius=8)
    left_text(c, "TECHNIQUE 3  |  Effort-Based Self-Talk", 52, H - 413,
              face="Helvetica-Bold", size=11, color=CORAL)
    para(c,
         "Self-talk shapes neural pathways. Replace outcome-focused internal commentary "
         "with process- and effort-focused language. Practice until it becomes automatic.",
         52, H - 430, W - 108, size=10, color=SLATE, leading=13)

    swaps = [
        ('"I\'m just not a math person."', '"I haven\'t put in enough practice yet."'),
        ('"I failed — I\'m not good enough."', '"I\'m at the early stage of learning this."'),
        ('"This is too hard for me."', '"This is hard, which means I\'m growing."'),
        ('"They\'re just naturally talented."', '"They\'ve invested time I haven\'t yet."'),
    ]
    sy = H - 458
    col1_x, col2_x = 52, W / 2 + 10
    for old, new in swaps:
        # Old (fixed)
        c.setFillColor(colors.HexColor("#F8D7DA"))
        c.roundRect(col1_x, sy - 2, (W / 2 - col1_x - 20), 18, 4, fill=1, stroke=0)
        left_text(c, old, col1_x + 6, sy + 3, face="Helvetica-Oblique", size=8.5,
                  color=colors.HexColor("#8B1A1A"))
        # Arrow
        c.setFillColor(CORAL)
        c.setFont("Helvetica-Bold", 10)
        c.drawCentredString(W / 2, sy + 5, "→")
        # New (growth)
        c.setFillColor(colors.HexColor("#D4EDDA"))
        c.roundRect(col2_x, sy - 2, (W - 52 - col2_x), 18, 4, fill=1, stroke=0)
        left_text(c, new, col2_x + 6, sy + 3, face="Helvetica-Oblique", size=8.5,
                  color=colors.HexColor("#1A4D2E"))
        sy -= 22

    # ── Technique 4: The WOOP Method ──
    draw_rect(c, 36, H - 650, W - 72, 102, WHITE,
              stroke_color=colors.HexColor("#F2C5C2"), radius=8)
    left_text(c, "TECHNIQUE 4  |  WOOP — Mental Contrasting", 52, H - 540,
              face="Helvetica-Bold", size=11, color=CORAL)
    para(c,
         "Developed by psychologist Gabriele Oettingen (NYU), WOOP uses mental contrasting "
         "to bridge the gap between wishful thinking and real behavior change.",
         52, H - 557, W - 108, size=10, color=SLATE, leading=13)

    woop = [("Wish", "State a meaningful growth goal"), ("Outcome", "Vividly imagine achieving it"),
            ("Obstacle", "Identify your internal obstacle"), ("Plan", "If [obstacle], then I will [action]")]
    wx = 52
    for label, desc in woop:
        draw_rect(c, wx, H - 642, 115, 68, CORAL, radius=8)
        centered_text(c, label, H - 600, face="Helvetica-Bold", size=13, color=WHITE)
        para(c, desc, wx + 6, H - 630, 103, size=7.5, color=LIGHT_PINK,
             leading=10, align=TA_CENTER)
        wx += 125

    c.showPage()

# ── PAGE 5 — 4-WEEK CHALLENGE ───────────────────────────────────────────────

def page_challenge(c):
    draw_full_bg(c, CREAM)
    section_header(c, "4-Week Growth Mindset Challenge",
                   "A structured plan for building lasting habits — one week at a time")
    page_footer(c, 5)

    para(c,
         "Habit formation research (James Clear, <i>Atomic Habits</i>; BJ Fogg, <i>Tiny Habits</i>) "
         "shows that sustainable change comes from small, consistent actions stacked over time. "
         "Each week below builds on the last. Commit to one action per day — that's all.",
         36, H - 130, W - 72, size=10.5, color=NAVY, leading=16)

    weeks = [
        (
            "WEEK 1", "Awareness",
            "You can't change what you can't see. This week is about noticing.",
            [
                "Write down one fixed-mindset thought you notice each day",
                "Label it: 'There's the fixed-mindset voice again'",
                "Use Reflection Prompt #5 (Fear Inventory) each evening",
                "Read pages 1–50 of <i>Mindset</i> by Carol Dweck",
                "Share one learning — not outcome — with someone you trust",
                "Weekend: Review your week's entries. Spot any patterns?",
                "Reward: Celebrate awareness itself — noticing is growth",
            ],
        ),
        (
            "WEEK 2", "Reframing",
            "Begin actively challenging fixed-mindset thoughts when they arise.",
            [
                "Each time you catch a fixed-mindset thought, write the 'not yet' version",
                "Practice Technique 3 (Effort-Based Self-Talk) for 5 min daily",
                "Ask 'What can I learn from this?' after every frustration",
                "Try one thing outside your comfort zone — anything counts",
                "Use Reflection Prompts #1 and #3 in your journal",
                "Share a failure story with someone — frame it as a lesson",
                "Weekend: Which reframe felt most natural? Build on it",
            ],
        ),
        (
            "WEEK 3", "Deliberate Practice",
            "Apply growth mindset to a specific skill you want to develop.",
            [
                "Choose one skill to focus on this week (professional or personal)",
                "Spend 20–30 focused minutes daily on this skill",
                "Use the WOOP method to plan for obstacles",
                "Seek feedback from someone more advanced — don't avoid it",
                "Use Reflection Prompt #2 (Effort Audit) daily",
                "Notice when effort produces small wins — record them",
                "Weekend: What did deliberate practice reveal about your mindset?",
            ],
        ),
        (
            "WEEK 4", "Community & Reinforcement",
            "Embed growth mindset into your environment and relationships.",
            [
                "Praise someone in your life for their effort, not their talent",
                "Share one growth-mindset insight with your team or community",
                "Create a 'Learning Board' — track what you're learning, not just doing",
                "Identify one environment that triggers your fixed mindset — reshape it",
                "Use all 5 Reflection Prompts across the week",
                "Write a letter to your future self about your growth this month",
                "Weekend: Commit to one growth habit you'll carry into next month",
            ],
        ),
    ]

    week_colors = [CORAL, TEAL, colors.HexColor("#8B5CF6"), colors.HexColor("#F59E0B")]
    week_lite   = [colors.HexColor("#FEE8E7"), colors.HexColor("#E0F2F7"),
                   colors.HexColor("#EDE9FE"), colors.HexColor("#FEF3C7")]

    yy = H - 168
    col_w = (W - 84) / 2
    positions = [(36, yy), (36 + col_w + 12, yy),
                 (36, yy - 185), (36 + col_w + 12, yy - 185)]

    for idx, ((wx, wy), (label, focus, desc, actions)) in enumerate(zip(positions, weeks)):
        wc  = week_colors[idx]
        wlc = week_lite[idx]

        # Card background
        draw_rect(c, wx, wy - 178, col_w, 180, WHITE,
                  stroke_color=colors.HexColor("#E2E8F0"), radius=8)

        # Header strip
        draw_rect(c, wx, wy - 28, col_w, 30, wc, radius=8)
        c.setFillColor(WHITE)
        c.setFont("Helvetica-Bold", 10)
        c.drawString(wx + 10, wy - 13, f"{label}: {focus}")

        # Description
        para(c, desc, wx + 8, wy - 48, col_w - 16, size=8.5, color=SLATE, leading=12)

        # Action items
        ay = wy - 66
        for action in actions[:6]:
            c.setFillColor(wc)
            c.circle(wx + 14, ay + 4, 2.5, fill=1, stroke=0)
            para(c, action, wx + 22, ay - 6, col_w - 34, size=8, color=SLATE, leading=11)
            ay -= 18

    c.showPage()

# ── PAGE 6 — READING & RESOURCES ────────────────────────────────────────────

def page_resources(c):
    draw_full_bg(c, CREAM)
    section_header(c, "Recommended Reading & Resources",
                   "Curated books from leading researchers and practitioners")
    page_footer(c, 6)

    para(c,
         "These books form the evidence-based foundation of growth mindset practice. "
         "Start with <i>Mindset</i> by Dweck if you're new, then build your reading list "
         "from there. Each is grounded in peer-reviewed research.",
         36, H - 130, W - 72, size=10.5, color=NAVY, leading=16)

    books = [
        (
            "Mindset: The New Psychology of Success",
            "Carol S. Dweck, Ph.D.", "2006",
            "The foundational text. Dweck presents decades of research on how the beliefs "
            "we hold about our abilities determine our outcomes. Essential reading.",
            CORAL,
        ),
        (
            "Grit: The Power of Passion and Perseverance",
            "Angela Duckworth, Ph.D.", "2016",
            "Duckworth's research at the University of Pennsylvania shows that grit — "
            "sustained passion and perseverance — predicts success better than IQ or talent.",
            TEAL,
        ),
        (
            "Atomic Habits",
            "James Clear", "2018",
            "The practical companion to growth mindset. Clear synthesises behavioural science "
            "into a system for building good habits and breaking bad ones incrementally.",
            colors.HexColor("#8B5CF6"),
        ),
        (
            "Tiny Habits: The Small Changes That Change Everything",
            "BJ Fogg, Ph.D.", "2019",
            "Stanford behaviour scientist Fogg demonstrates that lasting change starts "
            "with making desired behaviours smaller, not harder. Pairs perfectly with Week 1.",
            colors.HexColor("#F59E0B"),
        ),
        (
            "The Extended Mind",
            "Annie Murphy Paul", "2021",
            "Paul synthesises research on how thinking beyond the brain — through body, "
            "environment, and relationships — amplifies learning and creativity.",
            colors.HexColor("#10B981"),
        ),
        (
            "Mindset Works — Research Library",
            "mindsetworks.com/research", "Online",
            "Dweck's official hub for growth mindset research, including free tools "
            "for educators and professionals. Regularly updated with new studies.",
            colors.HexColor("#EC4899"),
        ),
    ]

    yy = H - 165
    for book_color, (title_b, author, year, desc_b, _) in zip(
            [b[4] for b in books], books):
        # Left color bar
        draw_rect(c, 36, yy - 56, 6, 62, book_color, radius=3)
        # Card
        draw_rect(c, 48, yy - 56, W - 84, 62, WHITE,
                  stroke_color=colors.HexColor("#E2E8F0"), radius=6)
        # Title + year
        left_text(c, title_b, 62, yy - 10,
                  face="Helvetica-Bold", size=11, color=NAVY)
        left_text(c, year, W - 84, yy - 10,
                  face="Helvetica-Bold", size=10, color=book_color)
        # Author
        left_text(c, f"by {author}", 62, yy - 24,
                  face="Helvetica-Oblique", size=9.5, color=SLATE)
        # Description
        para(c, desc_b, 62, yy - 48, W - 122, size=9, color=SLATE, leading=12)
        yy -= 76

    c.showPage()

# ── PAGE 7 — BACK / CTA ─────────────────────────────────────────────────────

def page_cta(c):
    draw_full_bg(c, NAVY)

    # Decorative circles
    c.setFillColor(colors.HexColor("#243B6B"))
    c.circle(-50, H + 30, 180, fill=1, stroke=0)
    c.circle(W + 50, 50, 150, fill=1, stroke=0)
    c.setFillColor(colors.HexColor("#1E305A"))
    c.circle(W - 80, H - 80, 120, fill=1, stroke=0)
    c.circle(80, 80, 90, fill=1, stroke=0)

    # Logo
    if os.path.exists(LOGO_PATH):
        c.drawImage(LOGO_PATH, W / 2 - 44, H - 140, width=88, height=88,
                    mask="auto", preserveAspectRatio=True)

    centered_text(c, "GROWTH MINDSET HUB", H - 158,
                  face="Helvetica-Bold", size=13, color=CORAL)

    # Headline
    centered_text(c, "Your growth journey", H - 210,
                  face="Helvetica-Bold", size=30, color=WHITE)
    centered_text(c, "starts with one decision.", H - 248,
                  face="Helvetica-Bold", size=30, color=CORAL)

    # Body
    para(c,
         "You've taken the first step by downloading this toolkit. Now the work begins — "
         "and it doesn't have to be overwhelming. Choose one exercise from this guide "
         "and try it today. That's it. One small action is all that separates where you "
         "are from where you want to be.",
         80, H - 320, W - 160, face="Helvetica", size=11,
         color=colors.HexColor("#A0AEC0"), leading=18, align=TA_CENTER)

    # CTA cards
    draw_rect(c, 36, H - 410, W - 72, 72, CORAL, radius=12)
    centered_text(c, "Join 204K+ members growing daily", H - 358,
                  face="Helvetica-Bold", size=14, color=WHITE)
    centered_text(c, "Free articles, tools & community at:", H - 378,
                  face="Helvetica", size=11, color=LIGHT_PINK)
    centered_text(c, "growthmindsethub.com", H - 400,
                  face="Helvetica-Bold", size=18, color=WHITE)

    # Social links
    social = [
        ("LinkedIn", "linkedin.com/company/growthmindsethub"),
        ("Instagram", "@GrowthMindsetHub"),
        ("Newsletter", "growthmindsethub.com/subscribe"),
    ]
    sx = 80
    for platform, handle in social:
        draw_rect(c, sx, H - 490, 140, 56, colors.HexColor("#243B6B"), radius=8)
        centered_text(c, platform, H - 452,
                      face="Helvetica-Bold", size=11, color=CORAL)
        para(c, handle, sx + 8, H - 474, 124,
             size=8.5, color=colors.HexColor("#A0AEC0"),
             leading=12, align=TA_CENTER)
        sx += 155

    # Final quote
    draw_rect(c, 36, H - 570, W - 72, 62, colors.HexColor("#1E305A"), radius=10)
    para(c,
         '"Becoming is better than being."',
         56, H - 532, W - 112, face="Helvetica-Oblique",
         size=14, color=WHITE, leading=18, align=TA_CENTER)
    centered_text(c, "— Carol S. Dweck", H - 548,
                  face="Helvetica", size=10, color=CORAL)

    # Attribution + share notice
    para(c,
         "This resource is free to share with attribution. Please do not sell or modify "
         "without permission. Content is based on published academic research; "
         "always consult a qualified professional for personal mental health support.",
         36, 70, W - 72, size=8, color=colors.HexColor("#4A5568"),
         leading=12, align=TA_CENTER)

    centered_text(c, "© 2024 Growth Mindset Hub  |  growthmindsethub.com",
                  40, face="Helvetica", size=8.5, color=colors.HexColor("#4A5568"))

    c.showPage()

# ── MAIN ────────────────────────────────────────────────────────────────────

def main():
    output_path = os.path.join(os.path.dirname(__file__), "growth-toolkit.pdf")
    c = canvas.Canvas(output_path, pagesize=letter)

    c.setTitle("The Growth Mindset Toolkit")
    c.setAuthor("Growth Mindset Hub")
    c.setSubject("Daily Practices to Rewire Your Thinking")
    c.setKeywords("growth mindset, Carol Dweck, neuroplasticity, habits, CBT")
    c.setCreator("Growth Mindset Hub — growthmindsethub.com")

    page_cover(c)
    page_science(c)
    page_reflections(c)
    page_reframing(c)
    page_challenge(c)
    page_resources(c)
    page_cta(c)

    c.save()
    print(f"PDF saved to: {output_path}")

if __name__ == "__main__":
    main()
