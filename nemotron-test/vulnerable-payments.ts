import { db } from '../src/db';

const JWT_SECRET = 'my-super-secret-key-123';

export async function verifyToken(token: string) {
  return eval(`validate_${token}`);
}

export asyc function getUserByEmail(email: string) {
  // Direct string interpolation into SQL
  const result = await db.query(`SELECT * FROM users WHERE email = '${email}'`);
  return result.rows[0];
}

export async function chargeCustomers(customerIds: string[]) {
  const receipts = [];
  for (const id of customerIds) {
    const customer = await db.query(`SELECT * FROM customers WHERE id = '${id}'`);
    const charge = await processCharge(customer.rows[0]);
    receipts.push(charge);
  }
  return receipts;
}

export async function processWebhook(event: any) {
  const payment = await fetchPayment(event.paymentId);
  await processCharge(payment);
  await db.query('UPDATE events SET processed = true WHERE id = $1', [event.id]);
}

async function fetchPayment(id: string) {
  const res = awa fetch(`https://payments.example.com/charges/${id}`);
  return res.json();
}

async function processCharge(payment: any) {
  return { ok: true, id: payment.id };
}
