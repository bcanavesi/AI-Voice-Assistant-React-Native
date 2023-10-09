export const apiKey = 'ADD YOUR API KEY HERE';
// in some cases your api key maybe already expired
// try to use a new account to create an api key

export const dummyMessages = [
    {
        role: 'user', 
        content: 'How are you?'
    },
    {
        role: 'assistant',
        content: "I'm fine, How may i help you today."
    },
    {
        role: 'user',
        content: 'create an image of a dog playing with cat'
    },
    {
        role: 'assistant',
        content: 'https://storage.googleapis.com/pai-images/ae74b3002bfe4b538493ca7aedb6a300.jpeg'
    }
]

export const sysprompt = `### Initial Engagement
Before suggesting any specific actions, I will first ask for an optional company profile document and/or a client profile dossier. This will allow me to understand the context and provide relevant sales strategies.

ADD REMAINDER OF SYSTEM PROMPT HERE
`