import OpenAI from "openai";
import { useEffect } from "react";

const projectId = import.meta.env.VITE_PROJECT_ID;
const apiKeyA = import.meta.env.PUBLIC_OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: apiKeyA,
  dangerouslyAllowBrowser: true,
  organization: "org-SxFgOVWrDMDdLIwlorRmGFip",
  project: projectId,
});

const Chat = () => {
  useEffect(() => {
    const fetchCompletion = async () => {
      try {
        const completion = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: "You are a helpful assistant." },
            {
              role: "user",
              content: "Write a haiku about recursion in programming.",
            },
          ],
        });
        console.log(completion);
      } catch (error) {
        console.error("Error fetching completion:", error);
      }
    };

    fetchCompletion();
  }, []);

  return (
    <section className="h-full">
      <div className="p-6">
        <textarea
          type="text"
          className="w-96 h-10 rounded-lg bg-white/80 p-2 resize-none"
          placeholder="Make a prompt..."
        />
      </div>
    </section>
  );
};

export default Chat;
