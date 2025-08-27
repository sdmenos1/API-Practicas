"use client";
import { useForm } from "react-hook-form";
import { commentSchema, type Comment } from "@/app/types/commentType";
import { useAddCommentMutation } from "@/app/services/apiComment";
import { Zap, AlertCircle, CheckCircle2, Send } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
export default function FormComment() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Comment>({
    resolver: zodResolver(commentSchema),
  });
  const [addComment, { isLoading, isSuccess, error }] = useAddCommentMutation();
  const onSubmit = async (data: Comment) => {
    await addComment({
      postId: 1,
      ...data,
    }).unwrap();
    reset();
  };

  return (
    <div className="h-1/2 bg-gray-50 flex items-center justify-center relative right-7 top-4">
      <div className="w-full max-w-md relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-2xl blur opacity-20 animate-pulse"></div>
        <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-2xl opacity-15 animate-pulse"></div>

        <div className="relative bg-white backdrop-blur-sm border-2 border-gray-200 rounded-2xl p-8 shadow-2xl shadow-purple-500/10">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Zap className="h-6 w-6 text-green-500 animate-pulse" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Comentarios
              </h2>
              <Zap className="h-6 w-6 text-green-500 animate-pulse" />
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="character"
                className="text-sm font-medium text-green-700 flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Personaje
              </label>
              <input
                type="text"
                {...register("character", {
                  required: "Character is required",
                })}
                className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 ${
                  errors.character
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                    : "border-gray-300 hover:border-gray-400"
                }`}
                placeholder="Rick, Morty, Jerry..."
              />
              {errors.character && (
                <p className="text-red-600 text-xs flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.character.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="title"
                className="text-sm font-medium text-blue-700 flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                Titulo
              </label>
              <input
                type="text"
                {...register("title")}
                className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-300 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 hover:border-gray-400"
                placeholder="Titulo o tema..."
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="body"
                className="text-sm font-medium text-purple-700 flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                Comentario
              </label>
              <textarea
                {...register("body", { required: "Comentario es requerido" })}
                rows={4}
                className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none ${
                  errors.body
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                    : "border-gray-300 hover:border-gray-400"
                }`}
                placeholder="Comparte tus pensamientos..."
              />
              {errors.body && (
                <p className="text-red-600 text-xs flex items-center gap-1">
                  <AlertCircle className="h-3 w-3" />
                  {errors.body.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full relative overflow-hidden bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 hover:from-green-600 hover:via-blue-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group shadow-lg shadow-purple-500/30"
            >
              <div className="flex items-center justify-center gap-2">
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending to dimension C-137...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    <span>Enviar Comentario</span>
                  </>
                )}
              </div>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </form>

          {isSuccess && (
            <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-300 rounded-xl">
              <p className="text-green-700 text-center flex items-center justify-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                ¡Comentario enviado exitosamente! Wubba Lubba Dub Dub!
              </p>
            </div>
          )}

          {error && (
            <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-rose-50 border border-red-300 rounded-xl">
              <p className="text-red-700 text-center flex items-center justify-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Error enviando comentario.
              </p>
            </div>
          )}
        </div>

        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-2xl">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-green-500 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-500 rounded-full animate-ping animation-delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-500 rounded-full animate-ping animation-delay-2000"></div>
        </div>
      </div>
    </div>
  );
}
