import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useAuth } from '../../../context/authContext';

const Dey7: React.FC = () => {
  const navigate = useNavigate();
const { userData, userToken } = useAuth();

  // State for file upload
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    assignmentId: 1,
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
    <>
      <section className="bg-white shadow-lg rounded-lg p-8 mb-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-blue-600 mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>

        {/* Title */}
        <h1 className="text-2xl text-center font-extrabold text-gray-800 mb-6 uppercase bg-blue-200 p-3 rounded-md shadow-md">
          Regular Expressions (RegEx) in Python
        </h1>

        {/* Content */}
        <div className="space-y-6">
          <p className="text-gray-700 text-lg leading-relaxed">
            Regular expressions (RegEx) are **powerful tools** used for **pattern matching** in strings. They allow us to search, extract, and manipulate text efficiently using **specific patterns**.
          </p>

          {/* Introduction */}
          <h2 className="text-xl font-semibold text-gray-800">1. Basics of Regular Expressions</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Python provides the `re` module to work with regular expressions. You can use it to search for patterns in text using functions like:
          </p>

          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li><code>re.search()</code> – Finds the first occurrence of a pattern.</li>
            <li><code>re.findall()</code> – Returns all occurrences of a pattern.</li>
            <li><code>re.match()</code> – Checks if a pattern matches at the **start** of a string.</li>
            <li><code>re.sub()</code> – Replaces occurrences of a pattern with a new string.</li>
          </ul>

          {/* Example: Basic RegEx */}
          <h3 className="text-lg font-semibold text-gray-800">Example: Finding Emails in a String</h3>
          <pre className="bg-gray-800 p-4 rounded-md text-white">
            <code>
              {`import re

text = "Contact us at support@example.com or sales@example.com"
pattern = r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}"

emails = re.findall(pattern, text)
print(emails)  # Output: ['support@example.com', 'sales@example.com']
`}
            </code>
          </pre>

          {/* Common RegEx Patterns */}
          <h2 className="text-xl font-semibold text-gray-800">2. Common RegEx Patterns</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Below are some useful **regular expressions** for different scenarios:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-700">
            <li><code>\\d</code> – Matches any digit (0-9).</li>
            <li><code>\\D</code> – Matches any non-digit character.</li>
            <li><code>\\w</code> – Matches any word character (letters, digits, underscore).</li>
            <li><code>\\s</code> – Matches any whitespace character (spaces, tabs).</li>
            <li><code>^</code> – Matches the **start** of a string.</li>
            <li><code>$</code> – Matches the **end** of a string.</li>
            <li><code>.*</code> – Matches **any sequence** of characters.</li>
          </ul>

          {/* Practical Exercise */}
<h2 className="text-2xl font-bold text-blue-600 bg-gray-300 py-2">🎯 Practical Exercise</h2>
<p className="text-gray-700 text-lg leading-relaxed">
  In this exercise, you will use **Regular Expressions (RegEx)** in Python to process and analyze text data. This will help you **extract useful information**, **validate user inputs**, and **manipulate strings** efficiently.
</p>

<h3 className="text-lg font-semibold text-gray-800 mt-4">Scenario: Building a Smart Data Extractor</h3>
<p className="text-gray-700 text-lg leading-relaxed">
  Imagine you are building a **data validation tool** for a customer service application. You need to:
</p>
<ul className="list-disc pl-6 text-lg text-gray-700">
  <li>Extract all <strong>phone numbers</strong> from a text message log.</li>
  <li>Check if emails in a user list are <strong>properly formatted</strong>.</li>
  <li>Find all words that start with a specific letter (e.g., <strong>"A"</strong>).</li>
  <li>Redact (hide) sensitive information such as **credit card numbers** from logs.</li>
</ul>

<h3 className="text-lg font-semibold text-gray-800 mt-4">Instructions</h3>
<p className="text-gray-700 text-lg leading-relaxed">
  Write a Python script that performs the following tasks:
</p>

<ol className="list-decimal pl-6 text-lg text-gray-700">
  <li>Use <code>re.findall()</code> to extract phone numbers from a given text.</li>
  <li>Use <code>re.match()</code> to validate if an email follows the correct format.</li>
  <li>Use <code>re.findall()</code> with word boundaries to find words starting with "A".</li>
  <li>Use <code>re.sub()</code> to replace any detected credit card numbers with <strong>"[REDACTED]"</strong>.</li>
</ol>

<h3 className="text-lg font-semibold text-gray-800 mt-4">📌 Sample Python Code</h3>
<pre className="bg-gray-800 p-4 rounded-md text-white">
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
print("🔒 Redacted Text:\n", redacted_text)
`}
  </code>
</pre>

<h3 className="text-lg font-semibold text-gray-800 mt-4">✅ Expected Output</h3>
<pre className="bg-gray-800 p-4 rounded-md text-white">
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

<p className="text-gray-700 text-lg leading-relaxed">
  🔥 **Try modifying the script!** Test it with **different inputs** and **observe the results**.
</p>

<p className="text-gray-700 text-lg leading-relaxed">After working on the above exercise; create a repository for your work and submit your github link below:</p>
<form onSubmit={handleSubmit} className="space-y-4">
                    <textarea
                        name = 'fileUrl'
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={6}
                        placeholder="Paste your github link"
                        value={form.fileUrl}
                        onChange={handleFileChange}
                    />
                    <button 
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-all"
                    >
                        Submit Exercise
                    </button>
                </form>
                {submitted && (
                    <p className="text-green-600 font-medium">Your exercise has been submitted successfully!</p>
                )}

          {/* Resources Section */}
          <h2 className="text-xl font-semibold text-gray-800">📚 Resources for Further Learning</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Here are some helpful resources to master **Regular Expressions in Python**:
          </p>
          <ul className="list-disc pl-6 text-lg text-blue-600">
            <li>
              <a
                href="https://docs.python.org/3/library/re.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Python Official Documentation – re Module
              </a>
            </li>
            <li>
              <a
                href="https://realpython.com/regex-python/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Real Python – Regular Expressions in Python
              </a>
            </li>
            <li>
              <a
                href="https://www.w3schools.com/python/python_regex.asp"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                W3Schools – Python RegEx
              </a>
            </li>
            <li>
              <a
                href="https://regex101.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Regex101 – Online RegEx Tester
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=K8L6KVGG-7o"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                YouTube – Python Regular Expressions Crash Course
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Dey7;
