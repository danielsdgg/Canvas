import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCode, FaLaptopCode, FaMusic, FaVideo, FaPlayCircle, FaBookOpen, FaLink, FaCheckCircle } from "react-icons/fa";

const Day9: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 mb-8 mx-auto max-w-5xl">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-indigo-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>

        {/* Section Heading */}
        <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center justify-center">
          <FaLaptopCode className="mr-3 text-2xl" />
          <h1 className="text-2xl sm:text-3xl font-extrabold uppercase">Multimedia Elements in HTML</h1>
        </div>

        <div className="p-4 sm:p-6">
          {/* Introduction */}
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
            Welcome to Day 9 of Morgan Technical Training’s frontend development course! Today, we explore how to enhance webpages with multimedia elements using HTML’s <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> tags. These tags allow you to embed sound and video content natively, enriching user experiences without relying on outdated third-party plugins like Flash.
          </p>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed mb-6">
            In this lesson, you’ll learn the syntax, attributes, and best practices for adding audio and video, including how to ensure compatibility across browsers and optimize performance. Practical examples and exercises will solidify your skills, preparing you to integrate multimedia into your projects effectively.
          </p>

          {/* Why Use Multimedia Elements? */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCode className="mr-2 text-indigo-600" />
              Why Use Multimedia Elements?
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Multimedia elements like audio and video make websites more engaging, interactive, and informative. They’re essential for applications such as music players, video tutorials, podcasts, and promotional content. Key advantages include:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Native Support:</strong> HTML5’s <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code> tags work across modern browsers without external dependencies.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>User Control:</strong> Built-in attributes like <code>controls</code> provide intuitive playback options.
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="mr-2 mt-1 text-indigo-600" />
                <strong>Accessibility:</strong> Fallback text and captions enhance usability for all users.
              </li>
            </ul>
          </div>

          {/* The Audio Element */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaMusic className="mr-2 text-indigo-600" />
              The Audio Element
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              The <code>&lt;audio&gt;</code> tag embeds sound content such as music, podcasts, or sound effects. Supported formats include MP3 (<code>audio/mpeg</code>), Ogg (<code>audio/ogg</code>), and WAV (<code>audio/wav</code>), with MP3 being the most widely compatible.
            </p>
            <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-2 flex items-center">
              <FaPlayCircle className="mr-2 text-indigo-600" />
              Basic Example
            </h3>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`}
            </pre>
            <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-2 mt-4 flex items-center">
              <FaPlayCircle className="mr-2 text-indigo-600" />
              Advanced Example with Multiple Sources
            </h3>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              The <code>&lt;source&gt;</code> tag specifies multiple formats, allowing the browser to choose the first supported one. Fallback text displays if no format is supported.
            </p>
          </div>

          {/* The Video Element */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaVideo className="mr-2 text-indigo-600" />
              The Video Element
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              The <code>&lt;video&gt;</code> tag embeds video content like tutorials, promos, or streams. Supported formats include MP4 (<code>video/mp4</code>), WebM (<code>video/webm</code>), and Ogg (<code>video/ogg</code>), with MP4 being the most common.
            </p>
            <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-2 flex items-center">
              <FaPlayCircle className="mr-2 text-indigo-600" />
              Basic Example
            </h3>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`<video controls width="600">
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video element.
</video>`}
            </pre>
            <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-2 mt-4 flex items-center">
              <FaPlayCircle className="mr-2 text-indigo-600" />
              Using Poster Attribute
            </h3>
            <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto text-sm sm:text-base">
              {`<video controls width="600" poster="thumbnail.jpg">
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video element.
</video>`}
            </pre>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-4">
              The <code>poster</code> attribute displays a preview image before the video plays, enhancing user experience.
            </p>
          </div>

          {/* Best Practices */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaCheckCircle className="mr-2 text-indigo-600" />
              Best Practices for Multimedia Elements
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              To ensure optimal performance and accessibility, follow these best practices:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaBookOpen className="mr-2 mt-1 text-indigo-600" />
                Provide multiple formats (e.g., MP3 and Ogg for audio) for broader browser compatibility.
              </li>
              <li className="flex items-start">
                <FaBookOpen className="mr-2 mt-1 text-indigo-600" />
                Use the <code>controls</code> attribute for user-friendly playback options.
              </li>
              <li className="flex items-start">
                <FaBookOpen className="mr-2 mt-1 text-indigo-600" />
                Optimize media files (e.g., compress MP4s) to reduce load times and bandwidth usage.
              </li>
              <li className="flex items-start">
                <FaBookOpen className="mr-2 mt-1 text-indigo-600" />
                Include fallback text between tags (e.g., "Your browser does not support...") for unsupported browsers.
              </li>
              <li className="flex items-start">
                <FaBookOpen className="mr-2 mt-1 text-indigo-600" />
                Add captions or transcripts using <code>&lt;track&gt;</code> for accessibility (e.g., <code>&lt;track src="captions.vtt" kind="subtitles" srclang="en" label="English"&gt;</code>).
              </li>
            </ul>
          </div>

          {/* Practice Exercises */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaPlayCircle className="mr-2 text-indigo-600" />
              Practice Exercises
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Reinforce your understanding with these exercises. Create an HTML page for each and upload your work to GitHub for Morgan-LMS submission:
            </p>
            <ol className="list-decimal list-inside text-gray-700 text-sm sm:text-base space-y-3">
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Create a page with both an <code>&lt;audio&gt;</code> and a <code>&lt;video&gt;</code> element, each with controls.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Add <code>autoplay</code>, <code>loop</code>, and <code>muted</code> attributes to your multimedia elements (e.g., <code>&lt;video autoplay loop muted&gt;</code>).
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Use multiple <code>&lt;source&gt;</code> tags with different formats (e.g., MP4 and WebM) and test compatibility in Chrome and Firefox.
              </li>
              <li className="flex items-start">
                <FaCode className="mr-2 mt-1 text-indigo-600" />
                Embed a YouTube video using the <code>&lt;iframe&gt;</code> tag (e.g., <code>&lt;iframe src="https://www.youtube.com/embed/VIDEO_ID" width="600" height="400" frameborder="0" allowfullscreen&gt;</code>).
              </li>
            </ol>
          </div>

          {/* Further Resources */}
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaBookOpen className="mr-2 text-indigo-600" />
              Further Resources on HTML Multimedia Elements
            </h2>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
              Explore these resources to deepen your multimedia skills:
            </p>
            <div className="space-y-2">
              <p className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  MDN Web Docs - HTML Audio Element
                </a>
              </p>
              <p className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  MDN Web Docs - HTML Video Element
                </a>
              </p>
              <p className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.w3schools.com/html/html_multimedia.asp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  W3Schools - HTML Multimedia
                </a>
              </p>
              <p className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://html.com/media/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  HTML.com - Multimedia Elements
                </a>
              </p>
              <p className="flex items-start">
                <FaLink className="mr-2 mt-1 text-indigo-600" />
                <a
                  href="https://www.youtube.com/watch?v=7Xz5sDmuE5U"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  YouTube Tutorial - HTML5 Audio and Video
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Day9;