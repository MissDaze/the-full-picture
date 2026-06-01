function formatTelegramMessage(data) {
  return `<b>📋 New Inquiry — The Full Picture</b>

<b>Name:</b> ${data.name || '—'}
<b>Agency:</b> ${data.agency || '—'}
<b>Email:</b> ${data.email || '—'}
<b>Phone:</b> ${data.phone || '—'}
<b>Suburb:</b> ${data.suburb || '—'}
<b>Interested In:</b> ${data.interest || '—'}

<b>Message:</b>
${data.message || '—'}`
}

export async function submitToFormspree(endpoint, data) {
  const cfg = endpoint // endpoint param now holds the full telegram config object
  const { botToken, chatId } = cfg || {}

  if (!botToken || botToken.includes('[TO BE ADDED')) {
    return { ok: false, unconfigured: true }
  }

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: formatTelegramMessage(data),
          parse_mode: 'HTML',
        }),
      }
    )
    const result = await response.json()
    return { ok: result.ok === true }
  } catch (err) {
    return { ok: false, error: err }
  }
}
