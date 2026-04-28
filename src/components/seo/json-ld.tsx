type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
  id?: string;
};

/**
 * Server-rendered JSON-LD script. Renders as `<script type="application/ld+json">`
 * so search engines see structured data directly in the SSR HTML payload.
 */
export function JsonLd({ data, id }: JsonLdProps) {
  const json = JSON.stringify(data);
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
