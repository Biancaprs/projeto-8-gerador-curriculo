import React from "react";

type Link = {
  title: string;
  url: string;
};

export default function LinksAdicionais({
  links,
  setLinks,
}: {
  links: Link[];
  setLinks: React.Dispatch<React.SetStateAction<Link[]>>;
}) {
  const addLink = () => {
    setLinks([...links, { title: "", url: "" }]);
  };

  const updateLink = (index: number, field: keyof Link, value: string) => {
    const newLinks = [...links];
    newLinks[index][field] = value;
    setLinks(newLinks);
  };

  const removeLink = (index: number) => {
    const newLinks = links.filter((_, i) => i !== index);
    setLinks(newLinks);
  };

  return (
    <div className="space-y-4">
      <label className="block font-medium">Links Adicionais</label>
      {links.map((link, index) => (
        <div key={index} className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Título do Link"
            value={link.title}
            onChange={(e) => updateLink(index, "title", e.target.value)}
            className="flex-1 border rounded p-2"
          />
          <input
            type="text"
            placeholder="URL"
            value={link.url}
            onChange={(e) => updateLink(index, "url", e.target.value)}
            className="flex-1 border rounded p-2"
          />
          <button
            type="button"
            onClick={() => removeLink(index)}
            className="bg-black text-white px-2 py-1 border rounded"
          >
            ✕
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addLink}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        +
      </button>
    </div>
  );
}