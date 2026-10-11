'use client';

import React, { useState } from 'react';
import { X, Play, Volume2, FileText, CheckCircle2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  speaker: string;
  role: string;
  duration: string;
  transcript: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  title,
  speaker,
  role,
  duration,
  transcript,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1F6B]/60 backdrop-blur-sm animate-fadeIn"
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-[#DDE5F5] flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-4 bg-[#0B1F6B] text-white flex items-center justify-between">
          <div>
            <span className="text-xs text-blue-200 font-medium">{role} • {duration}</span>
            <h3 id="video-modal-title" className="text-lg font-bold">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close video player"
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Display (Simulated Accessible HTML5 Canvas / Media with Play state) */}
        <div className="relative aspect-video bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 flex items-center justify-center text-white p-6 overflow-hidden">
          {/* Ambient Vitiligo Pattern Graphic */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute -top-10 -left-10 w-60 h-60 bg-blue-400 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-violet-400 rounded-full blur-3xl" />
          </div>

          {!isPlaying ? (
            <div className="text-center z-10 space-y-4">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center mx-auto hover:scale-105 transition-transform cursor-pointer shadow-lg"
                   onClick={() => setIsPlaying(true)}
              >
                <Play className="w-8 h-8 fill-white ml-1 text-white" />
              </div>
              <div>
                <p className="font-semibold text-lg text-white">{speaker}</p>
                <p className="text-xs text-blue-200">{role}</p>
              </div>
              <p className="text-xs text-white/70 italic max-w-sm mx-auto">
                Click play to begin story video with synchronized closed captions.
              </p>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col justify-between z-10 p-4">
              <div className="flex justify-between items-center text-xs text-blue-200">
                <span className="bg-red-600/80 text-white px-2 py-0.5 rounded text-[10px] font-bold">
                  PLAYING WITH CC
                </span>
                <span className="flex items-center space-x-1">
                  <Volume2 className="w-4 h-4" />
                  <span>Audio Description Enabled</span>
                </span>
              </div>

              {/* CC Subtitle Bar */}
              <div className="bg-black/80 rounded-xl p-3 border border-white/10 text-center max-w-md mx-auto">
                <p className="text-sm font-medium text-amber-200">
                  &ldquo;{transcript.slice(0, 140)}...&rdquo;
                </p>
              </div>

              {/* Player Controls */}
              <div className="flex items-center justify-between text-xs text-white/80">
                <button
                  onClick={() => setIsPlaying(false)}
                  className="px-3 py-1 rounded bg-white/20 hover:bg-white/30 text-white font-medium"
                >
                  Pause
                </button>
                <span className="text-[11px]">1:24 / {duration}</span>
              </div>
            </div>
          )}
        </div>

        {/* Transcript Toggle & Text Section */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 flex-1 overflow-y-auto">
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={() => setShowTranscript(!showTranscript)}
              className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#1D5FE0] hover:underline"
            >
              <FileText className="w-4 h-4" />
              <span>{showTranscript ? "Hide Full Transcript" : "Read Full Text Transcript"}</span>
            </button>
            <span className="text-[11px] text-gray-500 flex items-center">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-600 mr-1" />
              WCAG 2.2 Audio/Video Compliant
            </span>
          </div>

          {showTranscript && (
            <div className="p-3 bg-white rounded-xl border border-gray-200 text-xs text-gray-700 leading-relaxed max-h-40 overflow-y-auto mt-2">
              <p className="font-semibold text-[#0B1F6B] mb-1">Speaker: {speaker} ({role})</p>
              <p>{transcript}</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-white border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 text-xs font-medium hover:bg-gray-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
