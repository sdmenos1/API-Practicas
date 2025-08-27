"use client";

import { useState, useEffect } from "react";
import { MapPin, Globe, Calendar, X } from "lucide-react";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface CharacterModalProps {
  character: Character | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CharacterModal({
  character,
  isOpen,
  onClose,
}: CharacterModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      setIsVisible(false);
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!character || !isVisible) return null;

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "alive":
        return "bg-green-500";
      case "dead":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "alive":
        return "bg-green-100 text-green-800 border-green-200";
      case "dead":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white border border-gray-200  rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-lg shadow-gray-400">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">{character.name}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-3 right-3">
                <div
                  className={`w-4 h-4 rounded-full ${getStatusColor(
                    character.status
                  )} ring-2 ring-white`}
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Información Básica
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-600">Especie:</span>
                    <span className="text-gray-900">{character.species}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-600">Género:</span>
                    <span className="text-gray-900">{character.gender}</span>
                  </div>
                  {character.type && (
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-600">Tipo:</span>
                      <span className="text-gray-900">{character.type}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusBadgeColor(
                    character.status
                  )}`}
                >
                  {character.status}
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Ubicación
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Globe className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm text-gray-600">
                        Origen
                      </p>
                      <p className="text-gray-900">{character.origin.name}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-gray-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm text-gray-600">
                        Ubicación Actual
                      </p>
                      <p className="text-gray-900">{character.location.name}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Episodios
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-blue-600">
                    {character.episode.length}
                  </span>
                  <span className="text-gray-600">episodios aparecidos</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>Creado: {formatDate(character.created)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
