import React from "react";

const FilmCredit = () => {
  return (
    <div className="w-2/3 mx-auto">
      <h2 className="font-black text-5xl p-2 text-center">Film Credits</h2>
      <table className="w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Role</th>
            <th className="border border-gray-300 p-2">Movie Title</th>
            <th className="border border-gray-300 p-2">Director</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">
              Assistant dialogue director
            </td>
            <td className="border border-gray-300 p-2">Apoo (the bag)</td>
            <td className="border border-gray-300 p-2">Tope Adebayo</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Lead (Taiwo)</td>
            <td className="border border-gray-300 p-2">Scavenger</td>
            <td className="border border-gray-300 p-2">Olushola Animashaun</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">Dialogue director</td>
            <td className="border border-gray-300 p-2">Knot</td>
            <td className="border border-gray-300 p-2">Olushola Animashaun</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              Olu (dialogue director)
            </td>
            <td className="border border-gray-300 p-2">Fate of Adiva</td>
            <td className="border border-gray-300 p-2">Olushola Animashaun</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              Assistant dialogue director{" "}
            </td>
            <td className="border border-gray-300 p-2">Àwoo (Lens)</td>
            <td className="border border-gray-300 p-2">Sete Payi</td>
          </tr>
          <tr>
            <td className="border border-gray-300 p-2">
              Assistant dialogue director{" "}
            </td>
            <td className="border border-gray-300 p-2">Valor</td>
            <td className="border border-gray-300 p-2">Olushola Animashaun</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FilmCredit;
