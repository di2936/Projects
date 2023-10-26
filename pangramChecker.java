import java.util.Scanner;
public class pangramChecker {

    public static boolean isPangram(String s) {
        // Convert the input string to lowercase to make the check case-insensitive
        s = s.toLowerCase();

        // Create an array of size 26 to represent each letter of the alphabet (a to z)
        boolean[] alphabet = new boolean[26];

        // Iterate through each character in the string
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);

            // Check if the character is a lowercase letter and mark it as encountered
            if (c >= 'a' && c <= 'z') {
                alphabet[c - 'a'] = true;
            }
        }

        // If all letters in the alphabet have been encountered, it's a pangram
        for (boolean letter : alphabet) {
            if (!letter) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a sentence to check if it's a pangram:");
        String input = scanner.nextLine();

        if (isPangram(input)) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
        scanner.close();
    }
}
