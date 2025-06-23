export async function GET() {
  return new Response(
    JSON.stringify({ message: "Welcome to Nimatallahi Muslim Cooperative Society API" }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}