import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCode, FaLaptopCode, FaLink, FaEdit, FaCheckCircle } from 'react-icons/fa';
import { useAuth } from '../../../context/authContext';

const Dey7: React.FC = () => {
  const navigate = useNavigate();
  const { userData, userToken } = useAuth();

  // State for file upload
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    assignmentId: 22,
    userId: userData?.userDetails.id, // Ensuring a valid initial state
    fileUrl: "",
  });

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm(prev => ({
        ...prev,
        [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    console.log("Form Data:", form);
    // console.log("User Token:", userToken);
  
    if (!userToken) {
      alert("Authentication error. Please log in again.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:8080/api/v1/assignments/submit", {
        method: "POST",
        headers: { 
          'Authorization': `Bearer ${userToken}`,
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify(form),
      });
  
      if (response.ok) {
        setSubmitted(true);
        alert("Assignment submitted successfully!");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error submitting assignment:", error);
      alert("Failed to submit. Please try again later.");
    }
  };

  return (
    <section className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 mb-8 mx-auto max-w-5xl">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-indigo-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        <FaArrowLeft className="mr-2" />
        Back
      </button>

      {/* Title */}
      <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center justify-center">
        <FaLaptopCode className="mr-3 text-2xl" />
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold uppercase text-center">
          Regular Expressions (RegEx) in Python
        </h1>
      </div>

      <div className="p-4 sm:p-6">
        {/* Introduction */}
        <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaEdit className="mr-2 text-indigo-600" />
            1. Basics of Regular Expressions
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            Regular expressions (RegEx) are <strong>powerful tools</strong> used for <strong>pattern matching</strong> in strings. They allow us to search, extract, and manipulate text efficiently using <strong>specific patterns</strong>.
          </p>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            Python provides the <code className="bg-gray-800 text-white px-1 py-0.5 rounded">re</code> module to work with regular expressions. Key functions include:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2 mt-2">
            <li><code className="bg-gray-800 text-white px-1 py-0.5 rounded">re.search()</code> – Finds the first occurrence of a pattern.</li>
            <li><code className="bg-gray-800 text-white px-1 py-0.5 rounded">re.findall()</code> – Returns all occurrences of a pattern.</li>
            <li><code className="bg-gray-800 text-white px-1 py-0.5 rounded">re.match()</code> – Checks if a pattern matches at the <strong>start</strong> of a string.</li>
            <li><code className="bg-gray-800 text-white px-1 py-0.5 rounded">re.sub()</code> – Replaces occurrences of a pattern with a new string.</li>
          </ul>
          <div className="bg-indigo-100 p-4 rounded-lg shadow-md mt-4">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">Example: Finding Emails in a String</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
              <code>
{`import re

text = "Contact us at support@example.com or sales@example.com"
pattern = r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"

emails = re.findall(pattern, text)
print(emails)  # Output: ['support@example.com', 'sales@example.com']`}
              </code>
            </pre>
          </div>
        </section>

        {/* Common RegEx Patterns */}
        <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaCode className="mr-2 text-indigo-600" />
            2. Common RegEx Patterns
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            Below are some useful <strong>regular expression metacharacters</strong> and their meanings:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
            <li><code className="bg-gray-800 text-white px-1 py-0.5 rounded">\d</code> – Matches any digit (0-9).</li>
            <li><code className="bg-gray-800 text-white px-1 py-0.5 rounded">\D</code> – Matches any non-digit character.</li>
            <li><code className="bg-gray-800 text-white px-1 py-0.5 rounded">\w</code> – Matches any word character (letters, digits, underscore).</li>
            <li><code className="bg-gray-800 text-white px-1 py-0.5 rounded">\s</code> – Matches any whitespace character (spaces, tabs).</li>
            <li><code className="bg-gray-800 text-white px-1 py-0.5 rounded">^</code> – Matches the <strong>start</strong> of a string.</li>
            <li><code className="bg-gray-800 text-white px-1 py-0.5 rounded">$</code> – Matches the <strong>end</strong> of a string.</li>
            <li><code className="bg-gray-800 text-white px-1 py-0.5 rounded">.*</code> – Matches <strong>any sequence</strong> of characters (greedy).</li>
          </ul>
        </section>

        {/* Practical Exercise */}
        <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <div className="bg-indigo-600 text-white py-4 px-6 rounded-t-lg flex items-center justify-center mb-4">
            <FaLaptopCode className="mr-3 text-2xl" />
            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold uppercase text-center">
              🎯 Practical Exercise
            </h2>
          </div>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            In this exercise, you will use <strong>Regular Expressions (RegEx)</strong> in Python to process and analyze text data. This will help you <strong>extract useful information</strong>, <strong>validate user inputs</strong>, and <strong>manipulate strings</strong> efficiently.
          </p>

          <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 mt-4">Scenario: Building a Smart Data Extractor</h3>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            Imagine you are building a <strong>data validation tool</strong> for a customer service application. You need to:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
            <li>Extract all <strong>phone numbers</strong> from a text message log.</li>
            <li>Check if emails in a user list are <strong>properly formatted</strong>.</li>
            <li>Find all words that start with a specific letter (e.g., <strong>"A"</strong>).</li>
            <li>Redact (hide) sensitive information such as <strong>credit card numbers</strong> from logs.</li>
          </ul>

          <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2 mt-4">Instructions</h3>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            Write a Python script that performs the following tasks:
          </p>
          <ol className="list-decimal list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
            <li>Use <code className="bg-gray-800 text-white px-1 py-0.5 rounded">re.findall()</code> to extract phone numbers from a given text.</li>
            <li>Use <code className="bg-gray-800 text-white px-1 py-0.5 rounded">re.match()</code> to validate if an email follows the correct format.</li>
            <li>Use <code className="bg-gray-800 text-white px-1 py-0.5 rounded">re.findall()</code> with word boundaries to find words starting with "A".</li>
            <li>Use <code className="bg-gray-800 text-white px-1 py-0.5 rounded">re.sub()</code> to replace any detected credit card numbers with <strong>"[REDACTED]"</strong>.</li>
          </ol>

          <div className="bg-indigo-100 p-4 rounded-lg shadow-md mt-4">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">📌 Sample Python Code</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
              <code>
{`import re

# Sample log data
text = """
John: 987-654-3210, Alice: (123) 456-7890
Emails: test_user@example.com, invalid.email@com
Card details: 4111-1111-1111-1111, 5500 0000 0000 0004
Words: Apple is awesome, but banana is better.
"""

# 1. Extract phone numbers (formats: xxx-xxx-xxxx or (xxx) xxx-xxxx)
phone_pattern = r"(\\(\\d{3}\\) \\d{3}-\\d{4}|\\d{3}-\\d{3}-\\d{4})"
phones = re.findall(phone_pattern, text)
print("📞 Extracted Phone Numbers:", phones)

# 2. Validate email format
email_pattern = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
emails = text.split("Emails: ")[1].split(", ")  # Extract emails from text
valid_emails = [email for email in emails if re.match(email_pattern, email)]
print("📧 Valid Emails:", valid_emails)

# 3. Find all words starting with 'A' (case insensitive)
word_pattern = r"\\b[Aa]\\w*\\b"
words_with_A = re.findall(word_pattern, text)
print("🔠 Words starting with 'A':", words_with_A)

# 4. Redact credit card numbers (formats: xxxx-xxxx-xxxx-xxxx or xxxx xxxx xxxx xxxx)
cc_pattern = r"\\b(\\d{4}[- ]\\d{4}[- ]\\d{4}[- ]\\d{4})\\b"
redacted_text = re.sub(cc_pattern, "[REDACTED]", text)
print("🔒 Redacted Text:\\n", redacted_text)`}
              </code>
            </pre>
          </div>

          <div className="bg-indigo-100 p-4 rounded-lg shadow-md mt-4">
            <h3 className="text-md sm:text-lg font-semibold text-gray-800 mb-2">✅ Expected Output</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-md text-sm sm:text-base shadow-md overflow-x-auto">
              <code>
{`
📞 Extracted Phone Numbers: ['987-654-3210', '(123) 456-7890']
📧 Valid Emails: ['test_user@example.com']
🔠 Words starting with 'A': ['Apple', 'awesome']
🔒 Redacted Text:
John: 987-654-3210, Alice: (123) 456-7890
Emails: test_user@example.com, invalid.email@com
Card details: [REDACTED], [REDACTED]
Words: Apple is awesome, but banana is better.
`}
              </code>
            </pre>
          </div>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-4">
            🔥 <strong>Try modifying the script!</strong> Test it with <strong>different inputs</strong> and <strong>observe the results</strong>.
          </p>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mt-4">
            After working on the above exercise, create a repository for your work and submit your GitHub link below:
          </p>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <textarea
              name="fileUrl"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700 placeholder-gray-400"
              rows={6}
              placeholder="Paste your GitHub link"
              value={form.fileUrl}
              onChange={handleFileChange}
            />
            <button 
              type="submit"
              className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-all duration-300 shadow-md"
            >
              Submit Exercise
            </button>
          </form>
          {submitted && (
            <p className="text-indigo-600 font-medium mt-4 flex items-center">
              <FaCheckCircle className="mr-2" />
              Your exercise has been submitted successfully!
            </p>
          )}
        </section>

        {/* Resources */}
        <section className="mb-8 bg-indigo-50 border border-indigo-200 rounded-lg p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 flex items-center">
            <FaLink className="mr-2 text-indigo-600" />
            📚 Resources for Further Learning
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4">
            Here are some helpful resources to master <strong>Regular Expressions in Python</strong>:
          </p>
          <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed space-y-2">
            <li>
              <a
                href="https://docs.python.org/3/library/re.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                Python Official Documentation – re Module
              </a>
            </li>
            <li>
              <a
                href="https://realpython.com/regex-python/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                Real Python – Regular Expressions in Python
              </a>
            </li>
            <li>
              <a
                href="https://www.w3schools.com/python/python_regex.asp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                W3Schools – Python RegEx
              </a>
            </li>
            <li>
              <a
                href="https://regex101.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                Regex101 – Online RegEx Tester
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=K8L6KVGG-7o"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                YouTube – Python Regular Expressions Crash Course
              </a>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Dey7;